import createContext from './utils/createContext';
import translateDOMPositionXY from './utils/translateDOMPositionXY';
import isRTL from './utils/isRTL';

interface Props {
  rtl: boolean;
  translateDOMPositionXY: (style: React.CSSProperties, x: number, y: number) => void;
}

const TableContext = createContext<Props>({
  rlt: isRTL(),
  translateDOMPositionXY
});

export default TableContext;