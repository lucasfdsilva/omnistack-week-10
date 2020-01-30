const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const userNotFound = require('../utils/userNotFound');

module.exports = {
  async index(req, res){
    try{
      const allExistingDevs = await Dev.find();

      return res.status(200).json(allExistingDevs);

    } catch(err){
      return res.status(400).json({ error: err });
    }
  },

  async show(req, res){
    try{
      const { github_username } = req.query;
      let result;

      const devDB = await Dev.findOne({ github_username });

      result = devDB;

      if(!devDB){
        result = { message: userNotFound() };
      }

      return res.status(200).json({ result });    

    } catch(err){
      return res.status(400).json({ error: err });
    }
  },

  async store(req, res) {
    try{
      const { github_username, techs, latitude, longitude } = req.body;
      let status, result;

      const devDB = await Dev.findOne({ github_username });
    
      if(!devDB){
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

        let { name, login, avatar_url, bio } = apiResponse.data;

        if(!name){
          name = login;
        }

        const techsArray = parseStringAsArray(techs);

        const location = {
          type: 'Point',
          coordinates: [longitude, latitude]
        };

        const dev = await Dev.create({
          github_username,
          name,
          avatar_url,
          bio,
          techs: techsArray,
          location
        });

        return res.status(200).json({ dev });

      } else{
        return res.status(404).json({ message: 'User is already Registered' });
      }

    } catch(err){
      return res.status(400).json({ error: err });
    }
  },
  
  async update(req, res){
    try{
      const { github_username, name, avatar_url, bio, location, techs } = req.body;
      let status, result;

      const devDB = await Dev.findOne({ github_username });

      if(devDB){
        await Dev.updateOne(
          { _id: devDB._id },
          {
            $set: { name, avatar_url, bio, location, techs }
          }
        );

        const updatedDev = await Dev.findOne({ github_username });

        console.log(updatedDev);
        
        status = 200;
        result = { message: 'Sucess: User Updated Succesfully', updatedDev };
      } else{
        status = 404;
        result = { message: userNotFound() };
      }

      return res.status(status).json(result);
  
    } catch(err){
      return res.status(400).json({ error: err });
    }
  },

  async destroy(req, res){
    try{
      const { github_username } = req.body;
      let status, result;

      console.log(req.body)

      const devDB = await Dev.findOne({ github_username });

      if(devDB){
        await devDB.remove();

        status = 200;
        result = { message: 'Sucess: User Deleted Succesfully' };
        
      } else{
        console.log('Delete: User Not Found')
        status = 404;
        result = { message: userNotFound() };
      }

      return res.status(status).json(result);

    } catch(err){
      return res.status(400).json({ error: err });
    }
  }

};