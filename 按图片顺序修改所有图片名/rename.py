import os
import glob

def add_prefix_to_images():
    # 获取用户输入的前缀
    prefix = input("请输入要添加的前缀（按回车确认）: ").strip()
    
    # 支持的图片格式
    extensions = ('*.png', '*.jpg', '*.jpeg', '*.webp')
    
    # 获取当前目录下所有图片文件
    image_files = []
    for ext in extensions:
        image_files.extend(glob.glob(os.path.join(os.getcwd(), ext)))
    
    # 按文件创建时间排序（避免覆盖问题）
    image_files.sort(key=os.path.getctime)
    
    # 批量重命名
    for filepath in image_files:
        dir_path = os.path.dirname(filepath)
        old_name = os.path.basename(filepath)
        new_name = f"{prefix}{old_name}"
        new_path = os.path.join(dir_path, new_name)
        
        # 处理文件名冲突
        counter = 1
        while os.path.exists(new_path):
            base, ext = os.path.splitext(new_name)
            new_name = f"{base}_{counter}{ext}"
            new_path = os.path.join(dir_path, new_name)
            counter += 1
        
        os.rename(filepath, new_path)
        print(f"【成功】 {old_name} → {new_name}")

if __name__ == "__main__":
    add_prefix_to_images()