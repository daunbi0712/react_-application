import React from "react";

type Props = {
  prefectures:
    | {
        prefCode: number;
        prefName: string;
      }[];
  onClick: (name: string) => void;
  selectedPref: string | null;
  styles: { [key: string]: React.CSSProperties };
};

const CheckField: React.FC<Props> = ({
  prefectures,
  onClick,
  selectedPref,
  styles,
}) => {
  return (
    <>
      <div style={styles.checkcardList}>
        {(prefectures || []).map((prefecture) => (
          <div
            style={{
              ...styles.checkcard,
              ...(prefecture.prefName === selectedPref && styles.selected),
            }}
            key={prefecture.prefName}
            onClick={() => onClick(prefecture.prefName)}
          >
            <label style={styles.text}>{prefecture.prefName}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckField;
