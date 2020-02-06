export const changeKeepAlive = (parentName, keepAlive) => {
    this.$router.options.routes.map((item) => {
        if (item.path === parentName) {
            item.meta.keepAlive = keepAlive 
        }
    })
}