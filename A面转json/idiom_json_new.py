import pandas as pd
import json
import os

# 获取当前脚本文件夹路径
current_dir = os.path.dirname(os.path.abspath(__file__))

# 指定 Excel 文件名（确保该文件在当前脚本文件夹下）
excel_file_name = '荣花富贵A面文案.xlsx'

# 构建完整的 Excel 文件路径
excel_file_path = os.path.join(current_dir, excel_file_name)

# 指定要读取的工作表名称或索引
sheet_name = '花卉图鉴'  # 替换为你的工作表名称或索引，例如 'Sheet1' 或 0

# 读取 Excel 文件中的指定工作表
df = pd.read_excel(excel_file_path, sheet_name=sheet_name)  # 使用构建的文件路径和指定的工作表

# 重命名列以匹配 JSON 键
df.rename(columns={
    '序号': 'id',
    '标题': 'title',
    '介绍':'desc',
}, inplace=True)

# 将 DataFrame 转换为字典列表
idioms_list = df.to_dict('records')

# 将字典列表转换为 JSON 字符串
json_data = json.dumps(idioms_list, ensure_ascii=False, indent=4)

# 设置 JSON 文件名
json_file_name = 'rhfg.json'

# 构建完整的 JSON 文件路径
json_file_path = os.path.join(current_dir, json_file_name)

# 将 JSON 字符串写入文件
with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json_file.write(json_data)

print('Excel 数据已成功转换为 JSON 文件。')