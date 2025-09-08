const { 
  GraphQLObjectType, 
  GraphQLSchema, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLList, 
  GraphQLBoolean 
} = require('graphql');
const Task = require('./models/Task'); 

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    completed: { type: GraphQLBoolean }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: async () => {
        try {
          return await Task.findAll();
        } catch (err) {
          throw new Error('Error fetching tasks: ' + err.message);
        }
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTask: {
      type: TaskType,
      args: {
        title: { type: GraphQLString } 
      },
      resolve: async (_, { title }) => {
        try {
          if (!title) throw new Error('Title is required');

          console.log('Adding task with title:', title);
          const task = await Task.create({ title, completed: false });
          console.log('Task created:', task.toJSON());
          return task;
        } catch (err) {
          throw new Error('Error adding task: ' + err.message);
        }
      }
    },
    markComplete: {
      type: TaskType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: async (_, { id }) => {
        try {
          const task = await Task.findByPk(id);
          if (!task) throw new Error('Task not found');
          task.completed = true;
          await task.save(); 
          return task;
        } catch (err) {
          throw new Error('Error marking task complete: ' + err.message);
        }
      }
    },
    deleteTask: {
      type: TaskType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: async (_, { id }) => {
        try {
          const task = await Task.findByPk(id);
          if (!task) throw new Error('Task not found');
          await task.destroy();
          return task;
        } catch (err) {
          throw new Error('Error deleting task: ' + err.message);
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});


