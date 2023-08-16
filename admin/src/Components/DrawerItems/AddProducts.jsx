import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  IconButton,
  Snackbar,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import MuiAlert from '@mui/material/Alert';





const AddProducts = () => {
  const [categories, setCategories] = useState([
    {
      categoryName: '',
      categoryImage: null,
      subcategories: [{ subcategoryName: '', price: '', quantity: '', image: null }],
    },
  ]);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCategoryNameChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index].categoryName = value;
    setCategories(updatedCategories);
  };

  const handleCategoryImageChange = (index, file) => {
    const updatedCategories = [...categories];
    updatedCategories[index].categoryImage = file;
    setCategories(updatedCategories);
  };

  const handleSubcategoryChange = (categoryIndex, subIndex, field, value) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].subcategories[subIndex][field] = value;
    setCategories(updatedCategories);
  };

  const handleSubcategoryImageChange = (categoryIndex, subIndex, file) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].subcategories[subIndex].image = file;
    setCategories(updatedCategories);
  };

  const handleAddCategory = () => {
    setCategories([...categories, { categoryName: '', categoryImage: null, subcategories: [{ subcategoryName: '', price: '', quantity: '', image: null }] }]);
  };

  const handleAddSubcategory = (categoryIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].subcategories.push({ subcategoryName: '', price: '', quantity: '', image: null });
    setCategories(updatedCategories);
  };

  const handleDeleteSubcategory = (categoryIndex, subIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].subcategories.splice(subIndex, 1);
    setCategories(updatedCategories);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleAddProducts = () => {
    // Here you can store data locally for testing purposes
    setOpenSnackbar(true);
  };

  

  return (
    <div>
      {categories.map((category, categoryIndex) => (
        <Box key={categoryIndex} p={3} border={1} borderRadius={8} mb={3}>
          <Typography variant="h6">Category {categoryIndex + 1}</Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <TextField
                label="Category Name"
                value={category.categoryName}
                onChange={(e) =>
                  handleCategoryNameChange(categoryIndex, e.target.value)
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleCategoryImageChange(categoryIndex, e.target.files[0])
                }
              />
            </Grid>

            {category.subcategories.map((subcategory, subIndex) => (
              <Grid
                item
                container
                spacing={2}
                alignItems="center"
                key={subIndex}
              >
                <Grid item xs={3}>
                  <TextField
                    label="Subcategory Name"
                    value={subcategory.subcategoryName}
                    onChange={(e) =>
                      handleSubcategoryChange(
                        categoryIndex,
                        subIndex,
                        'subcategoryName',
                        e.target.value
                      )
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Price"
                    value={subcategory.price}
                    onChange={(e) =>
                      handleSubcategoryChange(
                        categoryIndex,
                        subIndex,
                        'price',
                        e.target.value
                      )
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Quantity"
                    value={subcategory.quantity}
                    onChange={(e) =>
                      handleSubcategoryChange(
                        categoryIndex,
                        subIndex,
                        'quantity',
                        e.target.value
                      )
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleSubcategoryImageChange(
                        categoryIndex,
                        subIndex,
                        e.target.files[0]
                      )
                    }
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    onClick={() =>
                      handleDeleteSubcategory(categoryIndex, subIndex)
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Grid item xs={2}>
              <IconButton
                onClick={() => handleAddSubcategory(categoryIndex)}
              >
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddProducts}
      >
        Add Products
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="success">
          Products added successfully!
        </MuiAlert>
      </Snackbar>  
    </div>
  );
};

export default AddProducts;
