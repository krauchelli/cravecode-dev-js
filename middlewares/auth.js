const auth = async (req, res, next) => {
    try {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        next();
    }
    catch (error) {
        return res.status(500).json({ 
            title: 'Error occured when authenticating user',
            message: error.message 
        });
    }
};

const redirectIfAuthenticated = async (req, res, next) => {
    try {
        if (req.session.user) {
            return res.redirect('/');
        }
        next();
    }
    catch (error) {
        return res.status(500).json({ 
            title: 'Error occured when checking user authentication',
            message: error.message 
        });
    }
};

 module.exports = { auth, redirectIfAuthenticated };