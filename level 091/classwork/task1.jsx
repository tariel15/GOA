//1) შექმენით const languages = ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Ruby', 'Swift', 'Kotlin', 'Go', 'Rust']; სია რომელსაც გადაუვლით map-ით და დაულაგებელ სიაში დაარენდერებთ თითოეულს <li> სახით, ყველა li თეგს უნდა ჰქონდეს onClick მოვლენის მსმენლი რომელიც დაკლიკებისას დაბეჭდავს language, index. შემდეგ onClick-ში ჩაშენბულ ფუნქციით მიიღეთ event პარამეტრი და დაბეჭდეთ console-ში
function LanguageList() {
    const languages = [
        'JavaScript',
        'Python',
        'Java',
        'C#',
        'PHP',
        'Swift',
        'Go',
    ];

    return (
        <ul>
            {languages.map((language, index) => (
                <li
                    key={index}
                    onClick={(event) => {
                        console.log('Language:', language);
                        console.log('Index:', index);
                        console.log('Event:', event);
                    }}
                >
                    {language}
                </li>
            ))}
        </ul>
    );
}

export default LanguageList;
