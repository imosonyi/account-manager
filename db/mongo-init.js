db.createUser({
    user: "account-manager",
    pwd: "account-manager",
    roles: [
        {
            role: "readWrite",
            db: "account-manager"
        }
    ]
});
