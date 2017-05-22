import formats from './formats';
import { week } from '../constants/views';

const CONFIG = {
  startOfWeek: 'Sunday',
};

export default function merge(config) {
  return {
    ...CONFIG,
    ...config,
    formats: formats(config.formats),
  };
}
