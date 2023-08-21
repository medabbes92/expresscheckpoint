const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const day = now.getDay(); // 0: Dimanche, 1: Lundi, ..., 6: Samedi
    const hour = now.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next(); 
    } else {
      res.send('Web application is only available during working hours.');
    }
  };
  module.exports= checkWorkingHours;  