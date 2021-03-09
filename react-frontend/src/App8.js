import { createContext, useContext } from "react";
const MessageContext = createContext();

const App = () => {
  return (
    <MessageContext.Provider value="Provider hi">
      <Level1 message="hi" />
    </MessageContext.Provider>
  );
};

export default App;

const Level1 = ({ message }) => <Level2 message={message} />;
const Level2 = ({ message }) => <Level3 message={message} />;
const Level3 = ({ message }) => <Level4 message={message} />;
const Level4 = ({ message }) => {
  return (
    <>
      <Level5 message={message} />
      <Another />
      <Another2Wrapper />
      <Another3 />
      <Another4 />
    </>
  );
};
const Level5 = ({ message }) => <div>Level5: {message}</div>;

const Another = () => {
  return (
    <MessageContext.Consumer>
      {(message) => <div>Another: {message}</div>}
    </MessageContext.Consumer>
  );
};
const Another2Wrapper = () => {
  return (
    <MessageContext.Consumer>
      {(message) => <Another2 message={message} />}
    </MessageContext.Consumer>
  );
};
const Another2 = ({ message }) => {
  return <div>Another2: {message}</div>;
};
const wrapper = (WrappedComponent) => {
  return (props) => (
    <MessageContext.Consumer>
      {(message) => <WrappedComponent message={message} />}
    </MessageContext.Consumer>
  );
};
const Another3 = wrapper(({ message }) => {
  return <div>Another3: {message}</div>;
});
const Another4 = () => {
  const message = useContext(MessageContext);
  return <div>Another4: {message}</div>;
};
