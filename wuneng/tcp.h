#ifndef TCP_H
#define TCP_H

#include <QWidget>

namespace Ui {
class Tcp;
}

class Tcp : public QWidget
{
    Q_OBJECT

public:
    explicit Tcp(QWidget *parent = nullptr);
    ~Tcp();

private:
    Ui::Tcp *ui;
};

#endif // TCP_H
