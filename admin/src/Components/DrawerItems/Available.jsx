import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

const Available = ({ categories }) => {
  return (
    <Box p={3}>
      {categories.map((category, categoryIndex) => (
        <Card key={categoryIndex} variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{category.categoryName}</Typography>
            {category.subCategories.map((subCategory, subCategoryIndex) => (
              <Grid container spacing={1} key={subCategoryIndex} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <Typography>{subCategory.subCategoryName}</Typography>
                </Grid>
                {subCategory.price && (
                  <Grid item xs={3}>
                    <Typography>Price: {subCategory.price}</Typography>
                  </Grid>
                )}
                {subCategory.quantity && (
                  <Grid item xs={3}>
                    <Typography>Quantity: {subCategory.quantity}</Typography>
                  </Grid>
                )}
              </Grid>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Available;
