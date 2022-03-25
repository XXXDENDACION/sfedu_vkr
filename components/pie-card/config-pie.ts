export const config = {
    appendPadding: 10,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
        type: "inner",
        offset: "-30%",
        content: ({ percent }): string => `${(percent * 100).toFixed(0)}%`,
        style: {
            fontSize: 14,
            textAlign: "center",
        },
    },
    interactions: [
        {
            type: "element-active",
        },
    ],
};