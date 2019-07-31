// Category Card Component
// Use for each category on the CategoriesPage

import React from "react";
import { Card, Image } from "semantic-ui-react";

const CategoryCard = () => {

  const categories = 
  [
    {
      'category': 'Animal Products', 
      'imgUrl': require('../images/categories/meats.jpg'),
      'description': '',
      'examples': 'eggs, honey, meats, etc.'
    },
    {
      'category': 'Beans', 
      'imgUrl': require('../images/categories/beans.jpg'),
      'description': '',
      'examples': 'Kidney, Soya, White, etc.'
    },
    {
      'category': 'Cereals - Maize', 
      'imgUrl': require('../images/categories/maize.jpg'),
      'description': '',
      'examples': 'Dry, Green, Maize Bran, etc.'
    },
    {
      'category': 'Cereals - Other', 
      'imgUrl': require('../images/categories/wheat.jpg'),
      'description': '',
      'examples': 'barley, millet, sorghum, wheat, etc.'
    },
    {
      'category': 'Cereals - Rice', 
      'imgUrl': require('../images/categories/rice.jpg'),
      'description': '',
      'examples': 'Kahama, Kayiso, Mbeya, etc.'
    },
    {
      'category': 'Fruits', 
      'imgUrl': require('../images/categories/fruit.jpg'),
      'description': '',
      'examples': 'bananas, citrus, exotic fruits, etc.'
    },
    {
      'category': 'Other', 
      'imgUrl': require('../images/categories/coffee.jpg'),
      'description': '',
      'examples': 'coffee, cotton, tea, tobacco, etc.'
    },
    {
      'category': 'Peas', 
      'imgUrl': require('../images/categories/peas.jpg'),
      'description': '',
      'examples': 'chic, dry, green, etc.'
    },
    {
      'category': 'Roots & Tubers', 
      'imgUrl': require('../images/categories/roots.jpg'),
      'description': '',
      'examples': 'potatoes, sunflowers, etc.'
    },
    {
      'category': 'Seeds & Nuts', 
      'imgUrl': require('../images/categories/nuts.jpg'),
      'description': '',
      'examples': 'nuts, sunflowers, etc.'
    },
    {
      'category': 'Vegetables', 
      'imgUrl': require('../images/categories/vegetables.jpg'),
      'description': 'test',
      'examples': 'carrots, cauliflower, cucumber, etc.'
    }
  ]


  return (
        categories.map((cat, index) => {
          return (
            <Card key={index} centered={true} style={{ maxWidth: "350px", width: "100%", height: "auto", margin: "10px" }}>
              <Image key={index} style={{ width: "100%" }} src={cat.imgUrl} />
              <Card.Content>
                <Card.Header>{cat.category}</Card.Header>
                <Card.Meta>
                  <span className="date">{cat.examples}</span>
                </Card.Meta>
                <Card.Description>
                  {cat.description}
                </Card.Description>
              </Card.Content>
            </Card>
          )
        })
  )
};

export default CategoryCard;
