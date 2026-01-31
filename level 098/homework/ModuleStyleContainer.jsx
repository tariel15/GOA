//4) შექმენით ModuleStyleContainer და ModuleStyleView კომპონენტები.
//შექმენით CSS Module ფაილი (მაგ: Card.module.css).
//ModuleStyleView-ში გამოიყენეთ className={styles.className}.
//Container კომპონენტში არ უნდა იყოს styling ლოგიკა.
//View კომპონენტში უნდა იყოს:
//- სათაური
//- ტექსტი
//- ღილაკი
import ModuleStyleView from "./ModuleStyleView";

function ModuleStyleContainer() {
    return (
        <div>
            <ModuleStyleView />
        </div>
    );
}

export default ModuleStyleContainer;
