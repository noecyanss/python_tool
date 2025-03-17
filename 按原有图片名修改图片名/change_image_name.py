import os
import re
from glob import glob

def rename_images():
    # 获取用户输入的前缀
    user_prefix = input("请输入需要添加的前缀（输入后按回车确认）: ").strip()
    
    current_dir = os.getcwd()
    image_extensions = ('*.png', '*.jpg', '*.jpeg', '*.webp')
    image_files = []
    
    # 获取所有图片文件路径（按创建时间排序）
    for ext in image_extensions:
        image_files.extend(sorted(glob(os.path.join(current_dir, ext)), key=os.path.getctime))
    
    # 处理所有图片文件
    counter = 1
    for filepath in image_files:
        filename = os.path.basename(filepath)
        name_part, ext = os.path.splitext(filename)
        
        # 分离数字部分和非数字部分
        match = re.search(r'\d+', name_part)
        if match:  # 含数字的文件
            # 直接替换数字前的所有字符为新前缀
            new_name = f"{user_prefix}{name_part[match.start():]}{ext}"
        else:      # 不含数字的文件
            # 生成唯一的新文件名
            while True:
                new_name = f"{user_prefix}{counter}{ext}"
                if not os.path.exists(os.path.join(current_dir, new_name)):
                    break
                counter += 1
            counter += 1
        
        # 执行重命名
        new_path = os.path.join(current_dir, new_name)
        os.rename(filepath, new_path)
        print(f"重命名: {filename} → {new_name}")

if __name__ == "__main__":
    rename_images()