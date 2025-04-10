/*
 * Giveaway.ts
 * File Type: Interface/types definition
 * Description:
 *   - Defines the attributes or fields of a giveaway object returned by the GamerPower API
 *
 * Author: David Kaplansky
 * Reasoning:
 *   - Ensures consistent structure and safety when working with our API data
 */

export interface Giveaway {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  instructions: string;
  open_giveaway_url: string;
}
