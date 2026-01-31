// school ობიექტი nested director ობიექტით
const school = {
    name: "Greenwood High",
    address: "123 Main St",
    director: {
        firstName: "tarieli",
        lastName: "bej"
    }
};

const { director: { firstName, lastName } } = school;
console.log(`Director's full name: ${firstName} ${lastName}`);

