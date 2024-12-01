const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.header('Authorization').replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Add user info to request
        req.user = decoded;
        
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};