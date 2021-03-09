// class Wrapper extends React.Component {
//   render() {
//     return (
//       <section style={{ padding: "4em", background: "papayawhip" }}>
//         {this.props.children}
//       </section>
//     );
//   }
// }

// class Title extends React.Component {
//   render() {
//     const fontSize = this.props.isBig ? "3em" : "1.5em";
//     return (
//       <h1 style={{ fontSize, textAlign: "center", color: "palevioletred " }}>
//         {this.props.children}
//       </h1>
//     );
//   }
// }
const Wrapper = (props) => (
  <section style={{ padding: "4em", background: "papayawhip" }}>
    {props.children}
  </section>
);
const Title = (props) => {
  const style = {
    fontSize: props.isBig ? "3em" : "1.5em",
    textAlign: "center",
    color: "palevioletred",
  };
  return <h1 style={style}>{props.children}</h1>;
};

function App() {
  const components = <Title>Hello World!</Title>;
  return <Wrapper children={components} />;
}

export default App;
