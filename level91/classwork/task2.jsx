//2) კომენტარებით დაწერეთ vite react build-ში შემავალი ყველა directory-ის (ფოლდერის) და ფაილის დანიშნულება
function ProjectStructure() {
    /*
        my-vite-react-app/
        
        node_modules/
        - შეიცავს ყველა დაინსტალირებულ npm პაკეტს
        - ავტომატურად იქმნება npm install-ის დროს
        
        public/
        - სტატიკური ფაილები
        - ეს ფაილები build-ის დროს პირდაპირ გადადის dist-ში
        - მაგ: images, favicon, robots.txt
        
        src/
        - React აპლიკაციის მთავარი კოდი
        
        assets/
        - სურათები, ფონტები და სხვა რესურსები
        - გამოიყენება კომპონენტებში import-ის საშუალებით
        
        components/
        - ცალკეული React კომპონენტები
        - კოდის დაყოფა და ხელახალი გამოყენება
        
        App.jsx
        - მთავარი React კომპონენტი
        - აერთიანებს სხვა კომპონენტებს
        
        main.jsx
        - აპლიკაციის entry point
        - აქ ხდება React-ის დაკავშირება HTML-სთან
        - ReactDOM.createRoot აქ იძახება
        
        index.css
        - გლობალური სტილები მთელი აპლიკაციისთვის

        index.html
        - მთავარი HTML ფაილი
        - შეიცავს <div id="root"></div>
        - აქ რენდერდება React აპლიკაცია

        package.json
        - პროექტის კონფიგურაცია
        - dependencies და scripts (dev, build, preview)
        
        vite.config.js
        - Vite-ის კონფიგურაციის ფაილი
        - პლაგინები, alias-ები, build პარამეტრები
        
        .gitignore
        - მიუთითებს Git-ს რომელი ფაილები არ უნდა აიტვირთოს
        
        README.md
        - პროექტის აღწერა და გამოყენების ინსტრუქცია
    */

    return null; // ეს კომპონენტი მხოლოდ განმარტებისთვისაა
}

export default ProjectStructure;
