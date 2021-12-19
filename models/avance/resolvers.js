import { ModeloAvance } from './avance.js';
import { UserModel } from '../usuario/usuario.js';
import { ProjectModel } from '../proyecto/proyecto.js';

const resolversAvance = {
  Avance: {
    creadoPor: async (parent, args, context) => {
      const usuario = await UserModel.findOne({
        _id: parent.creadoPor.toString(),
      });
      return usuario;
    },
    proyecto: async (parent, args, context) => {
      const proyectos = await ProjectModel.findOne({
        _id: parent.proyecto.toString(),
      });
      return proyectos;
    },
  },
  Query: {
    Avances: async (parent, args) => {
      const avances = await ModeloAvance.find();
      return avances;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await ModeloAvance.find({ proyecto: args._id });
       
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = ModeloAvance.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return avanceCreado;
    },
    editarAvance: async (parent, args) => {
      const avanceEditado = await ModeloAvance.findByIdAndUpdate(
        args._id,
        {
          descripcion: args.descripcion,
          observaciones: args.observaciones,
          proyecto: args.proyecto,
          creadoPor: args.creadoPor,
        },
        { new: true }
      );
      return avanceEditado;
    },
  },
}

export { resolversAvance };
