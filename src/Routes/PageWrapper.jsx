function PageWrapper(props) {
  const { route } = props;
  const { component } = route;

  // add your logic here for your protected routes

  return component;
}

export default PageWrapper;
