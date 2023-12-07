function TodoList({
  error,
  loading,
  searchedTodos,
  onError,
  onLoading,
  onEmptyTodos,
  render,
}) {
  console.log(onError);
  return (
    <section className="TodoList-Container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTodos?.length && onEmptyTodos()}

      {searchedTodos.map(render)}
    </section>
  );
}

export { TodoList };
