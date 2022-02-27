const identity = { firstname : "romain" , lastname : "breuil" , description : "Développeur Web Junior" }

export default function handler(req, res) {
    res.status(200).json({ identity })
  }
