import tippy, {createSingleton} from 'tippy.js';
import TippyGenerator from './Tippy';
import useSingletonGenerator from './useSingleton';

const useSingleton = useSingletonGenerator(createSingleton);

export default TippyGenerator(tippy);
export {useSingleton, tippy};
