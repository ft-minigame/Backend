export class CoalitionScoresResponse {
  private readonly gun: number;
  private readonly gon: number;
  private readonly gam: number;
  private readonly lee: number;

  constructor(scores: Record<string, number>) {
    this.gun = scores['gun'] || 0;
    this.gon = scores['gon'] || 0;
    this.gam = scores['gam'] || 0;
    this.lee = scores['lee'] || 0;
  }
}
