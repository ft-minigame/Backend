export class CoalitionScoresResponse {
  gun: number;
  gon: number;
  gam: number;
  lee: number;

  constructor(scores: Record<string, number>) {
    this.gun = scores['gun'] || 0;
    this.gon = scores['gon'] || 0;
    this.gam = scores['gam'] || 0;
    this.lee = scores['lee'] || 0;
  }
}
