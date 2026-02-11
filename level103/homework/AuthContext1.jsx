//6) AuthConsumer კომპონენტში:
///- მიიღეთ მონაცემი custom hook-ის გამოყენებით (useAuth)
// გამოიტანეთ email და password

//კომენტარებში ახსენით:
//- რატომ ჯობს useContext-ის wrapper hook (useAuth)
//- რა პლიუსი აქვს ამას კოდის სისუფთავისთვის
import { createContext } from "react";

const AuthContext = createContext();

export default AuthContext;
