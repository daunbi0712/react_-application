import React from "react";

type Props = {
  prefectures:
    | {
        prefCode: number;
        prefName: string;
      }[];
  onClickCode: (code: number) => void;
  selectedPref: string | null;
  styles: { [key: string]: React.CSSProperties };
};

const CheckField: React.FC<Props> = ({
  prefectures,
  onClickCode,
  selectedPref,
  styles,
}) => {
  return (
    <>
      <div style={styles.checkcardList}>
        {(prefectures || []).map((prefecture) => (
          <button
            style={{
              ...styles.checkcard,
              ...(prefecture.prefName === selectedPref && styles.selected),
            }}
            key={prefecture.prefName}
            onClick={() => onClickCode(prefecture.prefCode)}
          >
            <label style={styles.text}>{prefecture.prefName}</label>
          </button>
        ))}
      </div>
    </>
  );
};

export default CheckField;
