// dataController.js

import UserModel from '../models/dataSchema.js';

var count = 0;

const dataController = {
  handleAddData: async (req, res) => {
    count++;
    try {
      const { name, data } = req.body;

      const existingUser = await UserModel.findOne({ name });

      if (existingUser) {
        return res.status(400).json({ error: 'Data with this name already exists' });
      }

      const newUser = new UserModel({
        name,
        data,
      });

      await newUser.save();

      res.status(201).json({ message: 'Data added successfully', data: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  handleEditData: async (req, res) => {
    count++;
    try {
      const { id, name, data } = req.body;

      if (!id || (!name && !data)) {
        return res.status(400).json({ error: 'ID and at least one field to update are required' });
      }

      const userToUpdate = await UserModel.findById(id);

      if (!userToUpdate) {
        return res.status(404).json({ error: 'User not found' });
      }

      if (name) userToUpdate.name = name;
      if (data) userToUpdate.data = data;

      await userToUpdate.save();

      res.json({ message: 'Data updated successfully', data: userToUpdate });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getCount: () => {
    return count;
  },
};

export default dataController;
