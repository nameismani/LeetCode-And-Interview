// ComponentA.tsx
const ComponentA = () => {
  // server component
  return <h1>TestA</h1>;
};

// ComponentB.tsx

("use client");
const ComponentB = () => {
  // client component
  return <h1>TestB</h1>;
};

// ComponentC.tsx
const ComponentC = () => {
  // server component
  return <h1>TestC</h1>;
};

// ComponentD.tsx
const ComponentD = () => {
  // server component
  return <h1>TestD</h1>;
};

("use client");
import ComponentC from "./componetC";
const ComponentB = () => {
  // client component
  return (
    <>
      <h1>TestB</h1>
      <ComponentC /> // Component C and D will a client Component
      <ComponentD />
    </>
  );
};

const ComponentA = () => {
  // server component
  return (
    <>
      <h1>TestA</h1>
      <ComponentB>
        <ComponentC /> // Component C and D will a server Component
        <ComponentD />
      </ComponentB>
    </>
  );
};
