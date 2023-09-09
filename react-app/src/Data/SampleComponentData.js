import BasicFunctComponent from "./../BasicComponent/FunctComponent";
import BasicClassComponent from "./../BasicComponent/ClassComponent";
import BasicComponentWithState from "./../BasicComponent/ComponentWithState";
import ComponentCard from "./../BasicComponent/ComponentCard";
import BasicComponentWithArg from "./../BasicComponent/ComponentWithArg";
import BasicComponentWithCallback from "./../BasicComponent/ComponentWithCallback";
import StateHook from "./../Hooks/StateHookExample";
import UseEffectExample from "./../Hooks/UseEffectExample";
import UseReducerExample from "./../Hooks/UseReducerExample";

export default function getSampleComponentData() {
  return [
    {
      key: "1",
      value: (
        <ComponentCard
          Title="Basic Function Component"
          Text=""
          GetComponent={() => <BasicFunctComponent />}
        />
      ),
    },
    {
      key: "2",
      value: (
        <ComponentCard
          Title="Basic Class Component"
          Text=""
          GetComponent={() => <BasicClassComponent />}
        />
      ),
    },
    {
      key: "3",
      value: (
        <ComponentCard
          Title="Component with State"
          Text=""
          GetComponent={() => <BasicComponentWithState />}
        />
      ),
    },
    {
      key: "4",
      value: (
        <ComponentCard
          Title="Component with Arguments"
          Text=""
          GetComponent={() => <BasicComponentWithArg />}
        />
      ),
    },
    {
      key: "5",
      value: (
        <ComponentCard
          Title="Component with Callback"
          Text=""
          GetComponent={() => <BasicComponentWithCallback />}
        />
      ),
    },
    {
      key: "6",
      value: (
        <ComponentCard
          Title="Hooks - useState"
          Text=""
          GetComponent={() => <StateHook />}
        />
      ),
    },
    {
      key: "7",
      value: (
        <ComponentCard
          Title="Hooks - useEffect"
          Text=""
          GetComponent={() => <UseEffectExample />}
        />
      ),
    },
    {
      key: "8",
      value: (
        <ComponentCard
          Title="Hooks - useReducer"
          Text=""
          GetComponent={() => <UseReducerExample />}
        />
      ),
    },
  ];
}
