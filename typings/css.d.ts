declare module "*.scss" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}
