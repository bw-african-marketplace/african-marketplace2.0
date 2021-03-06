// Category Card Component
// Use for each category on the CategoriesPage

import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link} from 'react-router-dom'
import CategoryItems from './CategoryItems'

const CategoryCard = () => {

  const categories = 
  [
    {
      'category': 'AnimalProducts', 
      'imgUrl': require('../images/categories/meats.jpg'),
      'description': '',
      'examples': 'eggs, honey, meats, etc.',
      'products': ['meats', 'butter', 'lamb']
    },
    {
      'category': 'Beans', 
      'imgUrl': require('../images/categories/beans.jpg'),
      'description': '',
      'examples': 'Kidney, Soya, White, etc.'
    },
    {
      'category': 'CerealsMaize', 
      'imgUrl': require('../images/categories/maize.jpg'),
      'description': '',
      'examples': 'Dry, Green, Maize Bran, etc.'
    },
    {
      'category': 'CerealsOther', 
      'imgUrl': require('../images/categories/wheat.jpg'),
      'description': '',
      'examples': 'barley, millet, sorghum, wheat, etc.'
    },
    {
      'category': 'CerealsRice', 
      'imgUrl': require('../images/categories/rice.jpg'),
      'description': '',
      'examples': 'Kahama, Kayiso, Mbeya, etc.'
    },
    {
      'category': 'Fruits', 
      'imgUrl': require('../images/categories/fruit.jpg'),
      'description': '',
      'examples': 'bananas, citrus, exotic fruits, etc.',
      'products': ['banana', 'orange', 'lemon']
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
      'category': 'RootsTubers', 
      'imgUrl': require('../images/categories/roots.jpg'),
      'description': '',
      'examples': 'potatoes, sunflowers, etc.'
    },
    {
      'category': 'SeedsNuts', 
      'imgUrl': require('../images/categories/nuts.jpg'),
      'description': '',
      'examples': 'nuts, sunflowers, etc.'
    },
    {
      'category': 'Vegetables', 
      'imgUrl': require('../images/categories/vegetables.jpg'),
      'description': '',
      'examples': 'carrots, cauliflower, cucumber, etc.'
    },
    {
      'category': 'Cooking', 
      'imgUrl': require('../images/categories/vegetables.jpg'),
      'description': '',
      'examples': 'carrots, cauliflower, cucumber, etc.'
    }
  ]


  return (
        categories.map((cat, index) => {
          return (
            <Link to={`/CategoriesPage/${cat.category}`}>
              {/* <CategoryItems products={cat.products} /> */}
              <Card key={index} centered={true} style={{ maxWidth: "225px", width: "100%", height: "auto", margin: "10px" }}>
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
            </Link>
          )
        })
  )
};

export default CategoryCard;
