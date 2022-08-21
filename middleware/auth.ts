export default function (context: any) {
  console.log(context);
  if (!context.store.getters.userInfo) {
    context.redirect("/auth/login");
  }
}
