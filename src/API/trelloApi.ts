export const fetchTasks = () => {
  return fetch(
    `https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`
  ).then((data) => data.json());
};
