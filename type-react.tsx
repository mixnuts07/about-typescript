//・Tsの型定義 .. 明示的 / 型推論　の２つ


//明示的 .. 人間が型を指定
//型推論 .. Tsがいい感じに推論


//**実務では　デフォルトは型推論　→ 必要なときに明示的にする。


//・基本的な明示的な型定義

let str : string = "hoge";
let num : number = 1;
let bool : boolean = true;

let n : null = null;
let u : undefined = undefined;

// リテラル型 .. プリミティブのうち特定の値のみ許容
const str : string = "hoge"
const one : number = 1;

let two : 2 = 2;
two = 3;  // Error


// Union Type
let color : "red" | "green" | "blue" = "red";
color = "red";
color = "yellow";  // Error


//Any 何でもOK! あんまり使わないように。。
let value : any = 0;
any = "hoge";


// void  returnしない関数の戻り値！
const func = () : void => {
  console.log("hoge");
};


// Array　　配列の型
const strArr : string[] = ["red", "green"];
const arrNum : number[] = [1, 2];

strArr[0] = false // Error


// Tuple型　　要素の方が既知の配列を表現
const tupleArr : [string, number] = ["hoge", 1];


// Object型　非プリミティブ
const obj : {
  name : string;
  age : number;
} = {
  name : "hoge",
  age : 20,
};

obj.name = "hoge";
obj.birthday = "19980719";   // Error


// interface オブジェクトに名前をつけれる！！　  ==>  オブジェクト専用！！
interface Obj {　
  name : string;
  age : number;
}
const myObj : Obj = {
  name : "hoge",
  age : 18,
};


// Type Alias 型に名前をつける　　　==> オブジェクト以外も可能！！
type Location = string;
let locaiont : Location = "Hyougo";

type Obj = {
  name : string;
  age : number;
};

const myObj : Obj = {
  name : "hoge",
  age : 28.
};



////関数の型
// return あり
const sampleFunc = (arg : string) : string => {
  return age;
};
console.log(sampleFunc("hoge")); // hoge

// return なし
const sampleEchoFunc = (arg : string) : void => {
  console.log(arg);
};

sampleEchoFunc("hoge") // hoge


// optional　な引数の型定義　→ ?   optionalな型定義では値がundefinedになる可能性もある！！
interface posOptionals {
  xPos ?: number;    // → xPos : number | undefined
  yPos ?: number;    // → yPos : number | undefined
}

const getPosition = (opts : postOptions) => {
// undefined になる可能性も考慮して処理をかく！!
  let xPos = opts.xPos == undefined ? 0 : opts.xPos;
  let yPos = opts.yPos == undefined ? 0 : opts.yPos;
};

// ↓ 全部呼び出し可能！！
getPosition();
getPosition({xPos : 1});
getPosition({xPos : 1, yPos : 1});


// Promise型   Promise<>の型で戻り値を表す。
const PromiseFunc = (arg : string) : Promise<void> => {
  return new Promise(resolve => {
    setTimeOut(() => {
      resolve(arg);
    , 5000);
  }).then(result => {
    console.log(result);
  }));
 };
 
PromiseFunc("Hello World"); // 5s後に表示。


// Union Type  ORの使い方！
const printId = (id : number | string) => {
  console.log("Your ID is : " + id);
};
  
printId(101);
printId("202);
  
  
// 型の結合   & で型の結合ができる！
type Sample1 = {
  hoge : string;
};
type Sample2 = {
  fuga : string;
};
  
type CombineSample = Sample1 & Sample2;
// ↓と同じ
type Sample = {
  hoge : string;
  fuga : string;  
};

  
// typeof .. 既存変数から型定義を取り出せる。  
const obj = {
  firstName = "Taro";
  lastName = "Yamada";
};
const myobj : typeof obj = {
  firstName = "Hanako",
  lastName = "Satou",
  age : 20,   // age は　　　obj に存在しないのでError
};

// keyof .. オブジェクトのkeyをリテラルユニオン（リテラル＋Union）として取得可能。
type objType = { firstName :string; lastName string };

const key : keyof objType = "firstName";   // key firstName OR lastName


// typeof　を型ガードとして利用
function printId(id : number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
  

// ジェネリクス 型の確定を遅らせる　→ 未定の時に使う？
interface GSample<T> {
  value : T;
}

// valueがstring型になる
const sampleString : GSample<string> = {
  value : "hoge",
};
// valueがnumber型になる
const sampleString : GSample<number> = {
  value : 9,
};

  
// 関数定義のジェネリクス .. 引数の型を未確定に。
const GenericsFunc = <T>(arg : T) : T => {
  return arg;
};

// 引数は string
const result1 = GenericsFunc<string>("hoge");
// 引数は number
const result2 = GenericsFunc<number>(10);
  

// ArrorFunc AND tsx でジェネリクスを書くとき、 <T extends {}> になる！！
const GenericsFunc = <T extends {}>(arg : T) : T => {
  return arg;
};
 

// アサーション  Tsで推論された型を任意の型に上書き！  as と　<> を使うやり方がある。　⚠︎<>はFragmentと衝突可能性があるから非推奨。
const canvas1 = document.getElementById("canvas");                       // : HTMLElement | null
const canvas2 = document.getElementById("canvas") as HTMLCanvasElementl // : HTMLCanvasElementl
const canvas2 = <HTMLElement>document.getElementById("canvas")          // : HTMLCanvasElementl



// React とTypeScript

// Fucntion   React.FC<>   OR  React.VFC<>
type Props = {
  name : string;
};
const Sample : React.FC<Props> = ({name}) => {
  return <div>Hello {name}!</div>;
};


// Optional な Props  →  ?を使う
type Props = {
  x? : number;  //x : number | undefined
  y? : number;  //y : number | undefined
};
// Optionalな値はundefinedの可能性があるから初期値設定！
const CalcSum : React.FC<Props> = ({x=0, y=0}) => {
  const sum = x + y;
  return <div>{sum}</div>;
const App : React.FC = () => {
  return <CalcSum x={2} />;
};
          
          
// EvventCallBack の型定義
type InputProps = {
  value : string;
  onChange : (e : React.ChangeEvent<HTMLElement>) => void;
};

const Input : React.FC<InputProps> = ({value, onChange}) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};


const App : React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const onChange = (e : React.ChangeEvent<HTMLElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <div>{inputValue}</div>
      <Input value={inputValue} onChange={onChange} />
    </div>
  );
};
        
// Ex..その他EventCallBack
type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};


//// Hooks も必要な時に明示的に型推論

//useState .. アサーションを使う        
const [val, setVal] = useState(false); // これで問題ない
const [val, setVal] = useState<boolean | null>(null); // Nullable にしたい場合はアサーションを使う


// useEffect は戻り値に気をつける！！  関数 or undefined　以外は返さないようにする！！ (ts関係なく)
// NG
useEffect(
  () =>
    setTimeout(() => {
      /* ... */
    }, 1000),
  []
);

// OK
useEffect(() => {
  setTimeout(() => {
     /* ... */
  }, 1000);
}, []);

useEffect( ()=>{setTimeout(()=>{},1000)} , [] ) // useEffect(関数、配列)


// useref .. 初期値にnullが入る場合があるからアサーション！！

const App: React.FC = () => {
  // 明示的な型定義が必要
  const ElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 型ガードが必要
    if (!ElementRef.current) throw Error("ElementRef is not assigned");
    console.log(ElementRef.current.getBoundingClientRect());
  }, []);

  return <div ref={ElementRef}>app</div>;
};
          
// useReducer.  state と action に型定義。　
// action を ACTIONTYPE.  state を typeofで流用！
const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Count Down
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Count Up
      </button>
    </div>
  );
};
        
      
// useContext
// Provider の value にセットする値の型定義!!
// createContext で初期値を null にする場合はアサーションが必要。
interface AppContextInterface {
  name: string;
  age: number;
}
const sampleAppContext: AppContextInterface = {
  name: "Yamada Taro",
  age: 20,
};

const AppContext = createContext<AppContextInterface | null>(null);

const ChildComponent: React.FC = () => {
  // useContext(AppContext)! の ! は not-null のアサーション
  const appContext = useContext(AppContext)!;

  return (
    <p>
      {appContext.name}は{appContext.age}歳です。
    </p>
  );
};

const App: React.FC = () => {
  return (
    <AppContext.Provider value={sampleAppContext}>
      <ChildComponent />
    </AppContext.Provider>
  );
};
