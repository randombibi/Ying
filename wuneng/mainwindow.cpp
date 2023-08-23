#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    this->setMinimumSize(1000,1000);
    //QFont f("楷体",15);
    connect(ui->newAction,&QAction::triggered,this,&MainWindow::newAction);
     connect(ui->openAction,&QAction::triggered,this,&MainWindow::openAction);
    connect(ui->saveAction,&QAction::triggered,this,&MainWindow::saveAction);
}
MainWindow::~MainWindow()
{
    delete ui;
}
void MainWindow::newAction()
{
    ui->textEdit->clear();
    this->setWindowTitle("新建文档.txt");
}
void MainWindow::openAction()
{
    QString Filename=QFileDialog::getOpenFileName(this,"选择文件",QCoreApplication::applicationFilePath(),"*.cpp");
    if(Filename.isEmpty())
    {
        QMessageBox::warning(this,"警告","请选择一个文件");
    }
    else
    {
        //qDebug()<<Filename;
        QFile file(Filename);
        file.open(QIODevice::ReadWrite);
        QByteArray ba=file.readAll();
        ui->textEdit->setText(QString(ba));
        file.close();
    }
}
void MainWindow::saveAction()
{
    QString filename=QFileDialog::getSaveFileName(this,"选择文件",QCoreApplication::applicationFilePath());
    if(filename.isEmpty())
    {
        QMessageBox::warning(this,"警告","请选择一个文件");
    }
    else
    {
        QFile fi(filename);
        fi.open(QIODevice::WriteOnly);
        QByteArray ba;
        ba.append(ui->textEdit->toPlainText());
        fi.write(ba);
        fi.close();
    }
}
void MainWindow::keyPressEvent(QKeyEvent* k)
{
    if(k->modifiers()==Qt::ControlModifier&&k->key()==Qt::Key_S)
    {
        saveAction();
    }
}
void MainWindow::mousePressEvent(QMouseEvent* m)
{
    QPoint p=m->pos();
    qDebug() << p;
    if(m->button()==Qt::LeftButton)
    {
        qDebug()<<"左键被按下";
    }
}

