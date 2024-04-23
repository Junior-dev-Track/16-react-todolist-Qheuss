export default function HowManyTodos() {
  const lis = document.querySelectorAll('li');
  let count = 0;
  for (let i = 0; i < lis.length; i++) {
    if (lis[i].children.checked) {
      count += 1;
    }
    console.log(!lis[i].children.checked);
  }

  return <h2>Todos ({count} to be done)</h2>;
}
