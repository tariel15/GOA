const accountsJsonString = [
{
    "name": "Account1",
        "balance": 98765.987654
},
{
    "name": "Account2",
        "balance": 600.8765
}
];

const accountsobject1 = JSON.parse(accountsJsonString);
const accountsobject2 = JSON.stringify(accountsJsonString);

