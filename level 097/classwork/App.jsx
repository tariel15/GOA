//2) კალკულატორის კომპონენტი დაშალეთ 2 კომპონენტად: Container & Presentational. Container კომპონენტში დატოვეთ მხოლოდ მდგოამროებები, ფუნქციები და ა.შ ლოგიკასთან ასოცირებული ნაწილი ხოლო Presentational-ში კი უნდა მოხდეს მხოლოდ ui-ის დარენდრება, მიღებული prop-ის მიხევიდთ container კოპმონეტით
import CalculatorContainer from "./CalculatorContainer";

function App() {
    return <CalculatorContainer />;
}

export default App;
