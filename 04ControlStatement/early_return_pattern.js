// Early return pattern
// Used to exit a function early when a condition is met.
// It reduces nested if-else and makes code cleaner.



// Without early return:

function login(user) {

    if (user) {
        if (user.isActive) {
            return "Login successful";
        }
        else {
            return "Account inactive";
        }
    }
    else {
        return "No user found";
    }
}


// With early return:

function loginn(user) {

    if (!user) {
        return "No user found";
    }

    if (!user.isActive) {
        return "Account inactive";
    }

    return "Login successful";
}