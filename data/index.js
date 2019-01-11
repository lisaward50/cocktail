module.exports = {
  //category info is organised as: [name, description]
  categories: [
    ['Ordinary', 'Every day drinks'],
    ['Unforgettables', 'Distinctive, one-of-a-kind drinks'],
    ['Punch', 'Fruity party drinks'],
  ],

 //glass info is organised as: [name]
  glasses: [
    ['Cocktail'],
    ['Collins'],
    ['Copper'],
    ['Hurricane'],
    ['Whisky'],
  ],

  //drinks info is organised as: [name, image, code(=idDrink), category=(strCategory), glass=(strGlass)]
  drinks: [
    ['Margarita', 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg', 13060, 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass', '[Tequila, Triple sec, Lime juice, Salt]',1, 1],
    ['Amaretto Sour', 'https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg', 13731, 'Shake and strain. Garnish with a cherry and an orange slice.', '[Amaretto, Sour mix]', 1, 2],
    ['Manhattan', 'https://www.thecocktaildb.com/images/media/drink/ec2jtz1504350429.jpg', 13839,'Stirred over ice, strained into a chilled glass, garnished, and served up.', '[Sweet Vermouth, Bourbon, Angostura bitters, Ice, Maraschino cherry, Orange peel]', 2, 1],
    ['Mai Tai', 'https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg' , 11690, 'Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.', '[Light rum, Orgeat syrup, Triple sec, Sweet and sour, Cherry]', 1, 2],
    ['Moscow Mule', 'https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg', 13254,'Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently.', '[Vodka, Lime juice, Ginger ale]', 3, 3], 
    ['Zombie', 'https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg' , 17241, 'Blend at high speed for no more than 5 seconds. Pour into a glass, add ice cubes to fill, then add the garnish.', '[Rum, Gold rum, 151 proof rum, Pernod, Grenadine, Lime Juice, Angostura Bitters]', 1, 4],
    ['Tequila Sour', 'https://www.thecocktaildb.com/images/media/drink/ek0mlq1504820601.jpg', 12370, 'Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve.', '[Tequila, Lemon, Powdered sugar, Lemon, Cherry]', 1, 5],
  ],
  
ingredients: [
    ['Amaretto'],
    ['Tequila'],
    ['Triple sec'],
    ['Rum'],
    ['Vodka'],
    ['Lime'],
    ['Salt'],
    ['Sour mix'],
  ],

};