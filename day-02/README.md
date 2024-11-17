# **Day 02 of React**

## **Topics Covered**
1. How to Use the `useState` Hook  
2. Comparing the Normal Method vs. `useState` Hook  

---

## **Definitions**

### **Normal Method**  
In this approach, the code can add or subtract a number, but the changes are **not reflected** in the component. This is because React does not re-render the component when the state is updated using regular variables.

### **`useState` Hook**  
The `useState` hook allows us to add and subtract numbers while ensuring the component is **re-rendered** whenever the state changes. This is a React-specific approach to managing state in functional components.

---

## **`useState` Hook Syntax**
```javascript
const [num, setNum] = useState(initialValue);
