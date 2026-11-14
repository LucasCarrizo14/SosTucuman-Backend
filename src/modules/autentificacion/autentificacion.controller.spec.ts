import { Test, TestingModule } from '@nestjs/testing';
import { AutentificacionController } from './autentificacion.controller.js';
import { AutentificacionService } from './autentificacion.service.js';

describe('AutentificacionController', () => {
  let controller: AutentificacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutentificacionController],
      providers: [AutentificacionService],
    }).compile();

    controller = module.get<AutentificacionController>(AutentificacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
