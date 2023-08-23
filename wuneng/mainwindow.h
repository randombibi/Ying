#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include<QMessageBox>
#include<QProcess>
#include<QFileDialog>
#include<QDebug>
#include<QKeyEvent>
QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();
    void keyPressEvent(QKeyEvent *k);
    void mousePressEvent(QMouseEvent* m);
private slots:
    void newAction();
    void openAction();
    void saveAction();
private:
    Ui::MainWindow *ui;
    QString expression;
    int mytimer;
};
#endif // MAINWINDOW_H
