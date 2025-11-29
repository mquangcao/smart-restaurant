import { Controller, Head } from '@nestjs/common';

@Controller('')
export class HealthController {
  constructor() {}

  // Health check endpoint for render hosting and uptimerobot monitoring
  @Head()
  renderHealthCheck() {}
}
