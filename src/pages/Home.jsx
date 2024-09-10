import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Rect, Circle, Transformer, Text, Image as KonvaImage } from "react-konva";
import { Button, Box } from '@mui/material';
import Header from "../components/header"; 
import { SketchPicker } from 'react-color'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [color, setColor] = useState('black'); // Color state
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const transformerRef = useRef();
  const shapeRef = useRef();
  const stageRef = useRef();
  const textInputRef = useRef();

  // Add Rectangle
  const addRectangle = () => {
    const newRectangle = {
      x: window.innerWidth / 2 - 50,  // Center horizontally and offset by half the width of the shape
    y: window.innerHeight / 2 - 50,
      width: 100,
      height: 100,
      fill: "blue",
      id: `rect${shapes.length + 1}`,
      type: 'rect'
    };
    setShapes([...shapes, newRectangle]);
  };

  // Add Circle
  const addCircle = () => {
    const newCircle = {
      x: window.innerWidth / 2 - 50,  // Center horizontally and offset by half the width of the shape
    y: window.innerHeight / 2 - 50,
      radius: 50,
      fill: "red",
      id: `circle${shapes.length + 1}`,
      type: 'circle'
    };
    setShapes([...shapes, newCircle]);
  };

  // Add Text
  const addText = () => {
    const newText = {
      x: window.innerWidth / 2 - 50,  // Center horizontally and offset by half the width of the shape
    y: window.innerHeight / 2 - 50,
      text: "Double-click to edit",
      fontSize: 20,
      fill: "black",
      id: `text${shapes.length + 1}`,
      type: 'text'
    };
    setShapes([...shapes, newText]);
  };

  // Upload Image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result;
      img.onload = () => {
        const newImage = {
          x: window.innerWidth / 2 - 50,  // Center horizontally and offset by half the width of the shape
          y: window.innerHeight / 2 - 50,
          image: img,
          id: `image${shapes.length + 1}`,
          type: 'image'
        };
        setShapes([...shapes, newImage]);
      };
    };
    if (file) {
      reader.readAsDataURL(file);
      toast("Image Uploaded Successfully!", {
        style: { backgroundColor: 'green', color: 'white' }
     });
    }
    else{
      toast("Cannot laod your image!", {
        style: { backgroundColor: 'red', color: 'white' }
     })
    }

  };

  // Delete selected shape
  const deleteShape = () => {
    setShapes(shapes.filter((shape) => shape.id !== selectedId));
    setSelectedId(null); // Clear selection after deletion
  };

  // Handle shape click to select it
  const handleSelect = (id) => {
    setSelectedId(id);
    setColorPickerVisible(true); 
    const shape = shapes.find(shape => shape.id === id);
    setColor(shape.fill);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    setShapes(
      shapes.map((shape) =>
        shape.id === selectedId ? { ...shape, fill: color.hex } : shape
      )
    );
  };

  // Handle color picker close
  const handleCloseColorPicker = () => {
    setColorPickerVisible(false);
  };

  // Update transformer when selected shape changes
  useEffect(() => {
    if (selectedId) {
      const selectedShape = shapeRef.current;
      transformerRef.current.nodes([selectedShape]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [selectedId]);

  // Handle double-click to edit text
  const handleTextDblClick = (shape) => {
    setIsEditing(true);
    setSelectedId(shape.id);
    const stage = stageRef.current;
    const textPosition = shapeRef.current.getClientRect();
    
    const area = textInputRef.current;
    area.style.position = 'absolute';
    area.style.top = `${textPosition.y}px`;
    area.style.left = `${textPosition.x}px`;
    area.style.width = `${textPosition.width}px`;
    area.style.height = `${textPosition.height}px`;
    area.style.display = 'block';
    area.value = shape.text;
    area.focus();
  };

  // Handle text input blur
  const handleTextBlur = () => {
    const area = textInputRef.current;
    const updatedText = area.value;
    
    setShapes(
      shapes.map((shape) => 
        shape.id === selectedId ? { ...shape, text: updatedText } : shape
      )
    );
    
    area.style.display = 'none';
    setIsEditing(false);
    setSelectedId(null);
  };

  const deleteAll=()=>{
    setShapes([]);
  };

  const saveAsImage = () => {

    const uri = stageRef.current.toDataURL({ pixelRatio: 3 }); // Increase pixelRatio for better resolution
    const link = document.createElement('a');
    link.href = uri;
    link.download = 'canvas-image.png'; // Filename for the downloaded image
    link.click();
    toast("Image Saved Successfully!", {
      style: { backgroundColor: 'green', color: 'white' }
   });
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Add the Header */}
      <Header />
      <ToastContainer />
      {/* Canvas Controls */}
      <Box style={{ padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <Button variant="contained" color="primary" onClick={addRectangle}>Add Rectangle</Button>
        <Button variant="contained" color="secondary" onClick={addCircle}>Add Circle</Button>
        <Button variant="contained" color="success" onClick={addText}>Add Text</Button>
        <Button variant="contained" color="warning" component="label">
          Upload Image
          <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
        </Button>
        <Button variant="contained" color="error" onClick={deleteShape} disabled={!selectedId}>
          Delete Shape
        </Button>
        <Button variant="contained" color="error" onClick={deleteAll}>
          Delete All Shapes
        </Button>
        <Button variant="contained" color="info" onClick={saveAsImage}>Save Image</Button>
      </Box>

      {/* Canvas */}
      <div style={{ flex: 1, position: 'relative' }}>
        <textarea
          ref={textInputRef}
          style={{
            display: 'none',
            position: 'absolute',
            border: 'none',
            background: 'grey',
            outline: 'none',
            resize: 'none',
            fontSize: '20px',
            fontFamily: 'Arial',
          }}
          onBlur={handleTextBlur}
        />
        <Box display="flex" flexDirection={'column'} alignItems="center" justifyContent={"center"} margin="auto" 
          marginTop={5} boxShadow="10px 10px 20px #ccc" padding={3} borderRadius={5}>
        <Stage width={window.innerWidth-200} height={window.innerHeight - 150} ref={stageRef}>
          <Layer >
            {shapes.map((shape, i) => {
              if (shape.type === 'circle') {
                return (
                  <Circle
                    key={shape.id}
                    x={shape.x}
                    y={shape.y}
                    radius={shape.radius}
                    fill={shape.fill}
                    stroke={shape.id === selectedId ? "black" : null}
                    strokeWidth={shape.id === selectedId ? 4 : 0}
                    onClick={() => handleSelect(shape.id)}
                    ref={shape.id === selectedId ? shapeRef : null}
                    draggable
                    
                  />
                );
              } else if (shape.type === 'rect') {
                return (
                  <Rect
                    key={shape.id}
                    x={shape.x}
                    y={shape.y}
                    width={shape.width}
                    height={shape.height}
                    fill={shape.fill}
                    stroke={shape.id === selectedId ? "black" : null}
                    strokeWidth={shape.id === selectedId ? 4 : 0}
                    onClick={() => handleSelect(shape.id)}
                    ref={shape.id === selectedId ? shapeRef : null}
                    draggable
                  />
                );
              } else if (shape.type === 'text') {
                return (
                  <Text
                    key={shape.id}
                    x={shape.x}
                    y={shape.y}
                    text={shape.text}
                    fontSize={shape.fontSize}
                    fill={shape.fill}
                    draggable
                    ref={shape.id === selectedId ? shapeRef : null}
                    onClick={() => handleSelect(shape.id)}
                    onDblClick={() => handleTextDblClick(shape)}
                    
                  />
                );
              } else if (shape.type === 'image') {
                return (
                  <KonvaImage
                    key={shape.id}
                    x={shape.x}
                    y={shape.y}
                    image={shape.image}
                    width={100} // Set a default width
                    height={100} // Set a default height
                    draggable
                    onClick={() => handleSelect(shape.id)}
                    ref={shape.id === selectedId ? shapeRef : null}
                  />
                );
              }
              return null;
            })}
            <Transformer
              ref={transformerRef}
              boundBoxFunc={(oldBox, newBox) => {
                // limit resize
                if (newBox.width < 20 || newBox.height < 20) {
                  return oldBox;
                }
                return newBox;
              }}
            />
          </Layer>
        </Stage>
        {colorPickerVisible && (
          <div style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1000
          }}>
            <button onClick={handleCloseColorPicker}>Close Color Picker</button>
            <SketchPicker
              color={color}
              onChangeComplete={handleColorChange}
              onClose={handleCloseColorPicker}
            />
          </div>
        )}
        </Box>
      </div>
    </div>
  );
};


export default Home;



 

    
